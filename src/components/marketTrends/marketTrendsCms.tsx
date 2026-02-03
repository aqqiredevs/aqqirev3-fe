"use client"

import React, { useEffect, useState } from 'react'
import { apiInstance } from "@/utils/axiosInstance";
import { checkErrors } from '@/utils/checkError';

interface MarketTrend {
    id: string;
    title: string;
    content: string;
    category: string;
    itemUrl: string;
    imageUrl: string;
    slot?: number | null;
}

const MarketTrendsCms = () => {
    const [allMarketTrends, setAllMarketTrends] = useState<MarketTrend[]>([]);
    const [stagedSlots, setStagedSlots] = useState<Record<number, string | null>>({ 1: null, 2: null, 3: null });
    const [loading, setLoading] = useState(true);

    const [editFile, setEditFile] = useState<File | null>(null)

    const [activeSlot, setActiveSlot] = useState<number | null>(null);
    const [selectedTrendId, setSelectedTrendId] = useState<string>("");
    const [selectedFile, setSelectedFIle] = useState<File | null>(null)
    const [isCreating, setIsCreating] = useState(false);
    const [isManaging, setIsManaging] = useState(false);

    const CATEGORIES = ["News", "Lifestyle", "Property", "Finance", "Investment"];

    // Initial state for creation
    const [newTrend, setNewTrend] = useState({
        title: "",
        content: "",
        itemUrl: "",
        imageUrl: "",
        category: "",

    });

    const [editingTrend, setEditingTrend] = useState<MarketTrend | null>(null);

    useEffect(() => {
        loadInitialData();
    }, []);

    const loadInitialData = async () => {
        setLoading(true);
        try {

            const response = await apiInstance.get("/api/cms/market-trends/all");
            const data = response.data;
            setAllMarketTrends(data);

            const mapping: Record<number, string | null> = { 1: null, 2: null, 3: null };
            data.forEach((t: MarketTrend) => {
                if (t.slot) mapping[t.slot] = t.id;
            });
            setStagedSlots(mapping);
        } catch (err) {
            checkErrors(err);
        } finally {
            setLoading(false);
        }
    };

    const handleConfirmAssign = async () => {
        if (!activeSlot || !selectedTrendId) return;
        try {
            await apiInstance.patch("/api/cms/market-trends/publish", {
                market_trend_id: selectedTrendId,
                slot: activeSlot
            });
            setStagedSlots(prev => ({ ...prev, [activeSlot]: selectedTrendId }));
            setAllMarketTrends(prev => prev.map(t => t.id === selectedTrendId ? { ...t, slot: activeSlot } : t));
            setActiveSlot(null);
            setSelectedTrendId("");
        } catch (err) { checkErrors(err); }
    };

    const handleCreateTrend = async () => {
        const { title, content, itemUrl, category } = newTrend

        if (!title || !content || !itemUrl || !category || !selectedFile) {
            alert("please fill in all fields and select an image")
            return
        }

        const formData = new FormData()
        formData.append("title", title)
        formData.append("content", content)
        formData.append("itemUrl", itemUrl)
        formData.append("category", category)
        formData.append("image", selectedFile)

        try {

            setLoading(true)
            const response = await apiInstance.post("/api/cms/market-trends", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },


            })


            setAllMarketTrends(prev => [response.data, ...prev])
            setIsCreating(false)

            setNewTrend({ title: "", content: "", itemUrl: "", imageUrl: "", category: "" });
            setSelectedFIle(null)
            alert("Market Trend Addded")
        } catch (err) {
            checkErrors(err)
        } finally {
            setLoading(false)
        }


    };

    const handleUpdateTrend = async () => {
        if (!editingTrend) return;

        const formData = new FormData();
        formData.append("title", editingTrend.title || "");
        formData.append("content", editingTrend.content || "");
        formData.append("category", editingTrend.category || "");
        formData.append("itemUrl", editingTrend.itemUrl || "");

        if (editFile) {
            formData.append("image", editFile);
        }

        try {
            setLoading(true);
            const response = await apiInstance.put(
                `/api/cms/market-trends/${editingTrend.id}`,
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            setAllMarketTrends(prev => prev.map(t => t.id === editingTrend.id ? response.data : t));
            setIsManaging(false);
            setEditingTrend(null);
            setEditFile(null);
            alert("Market Trend Updated Successfully!");
        } catch (err) {
            checkErrors(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="p-10 text-center">Loading Market Trends...</div>;

    return (
        <div className='p-10 max-w-7xl mx-auto'>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Market Trends CMS</h1>
            </div>


            <div className='flex gap-4 mb-10'>
                <div className="flex-[3] flex gap-4">
                    {[1, 2, 3].map((num) => {
                        const trend = allMarketTrends.find(t => t.id === stagedSlots[num]);
                        return (
                            <div key={num} onClick={() => setActiveSlot(num)} className={`flex-1 min-h-[120px] p-4 border-2 rounded-xl cursor-pointer transition-all hover:bg-white flex flex-col justify-center items-center text-center ${trend ? 'border-emerald-500 bg-emerald-50' : 'border-dashed border-gray-300 bg-gray-50'}`}>
                                <span className="text-[10px] font-bold text-gray-400 uppercase mb-1">Slot {num}</span>
                                <p className="text-xs font-semibold text-emerald-900 line-clamp-2">{trend ? trend.title : "+ Assign Trend"}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="flex-1 flex flex-col gap-2">
                    <button onClick={() => setIsCreating(true)} className="flex-1 border-2 border-indigo-200 bg-indigo-50 rounded-xl font-bold text-indigo-600 hover:bg-indigo-100 transition-colors border-dashed">
                        📈 Create Trend
                    </button>
                    <button onClick={() => setIsManaging(true)} className="flex-1 border-2 border-amber-200 bg-amber-50 rounded-xl font-bold text-amber-600 hover:bg-amber-100 transition-colors border-dashed">
                        ⚙️ Manage Library
                    </button>
                </div>
            </div>


            {activeSlot && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
                        <h2 className="text-lg font-bold mb-4">Assign Trend to Slot {activeSlot}</h2>
                        <select className="w-full p-3 border rounded-xl mb-4" value={selectedTrendId} onChange={(e) => setSelectedTrendId(e.target.value)}>
                            <option value="">Choose from library...</option>
                            {allMarketTrends.filter(t => t.slot === null).map(t => (
                                <option key={t.id} value={t.id}>{t.title}</option>
                            ))}
                        </select>
                        <div className="flex gap-2">
                            <button onClick={() => setActiveSlot(null)} className="flex-1 py-3 bg-gray-100 rounded-xl">Cancel</button>
                            <button onClick={handleConfirmAssign} className="flex-2 py-3 bg-emerald-600 text-white rounded-xl font-bold">Publish to Slot</button>
                        </div>
                    </div>
                </div>
            )}


            {isCreating && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 space-y-4">
                        <h2 className="text-lg font-bold">Create New Market Trend</h2>
                        <input className="w-full p-3 border rounded-xl" placeholder="Title" value={newTrend.title} onChange={e => setNewTrend({ ...newTrend, title: e.target.value })} />
                        <textarea className="w-full p-3 border rounded-xl" placeholder="Content/Description" rows={3} value={newTrend.content} onChange={e => setNewTrend({ ...newTrend, content: e.target.value })} />
                        <input className="w-full p-3 border rounded-xl" placeholder="External URL (itemUrl)" value={newTrend.itemUrl} onChange={e => setNewTrend({ ...newTrend, itemUrl: e.target.value })} />
                        {/* <input className="w-full p-3 border rounded-xl" placeholder="Image URL (imageUrl)" value={newTrend.imageUrl} onChange={e => setNewTrend({ ...newTrend, imageUrl: e.target.value })} /> */}

                        <input type="file"
                            accept="image/*"
                            className='w-full p-3 border rounded-xl'
                            onChange={e => setSelectedFIle(e.target.files ? e.target.files[0] : null)} />
                        {selectedFile && <p className='text-xs text-grey-500'>Selected:{selectedFile.name}</p>}

                        <select className="w-full p-3 border rounded-xl" value={newTrend.category} onChange={e => setNewTrend({ ...newTrend, category: e.target.value })}>
                            <option value="">Select Category</option>
                            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        <div className="flex gap-2">
                            <button onClick={() => setIsCreating(false)} className="flex-1 py-3 bg-gray-100 rounded-xl">Cancel</button>
                            <button onClick={handleCreateTrend} className="flex-2 py-3 bg-indigo-600 text-white rounded-xl font-bold">Save Trend</button>
                        </div>
                    </div>
                </div>
            )}


            {isManaging && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 space-y-4 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-bold">Trend Library</h2>
                            <button onClick={() => { setIsManaging(false); setEditingTrend(null); }} className="text-2xl">&times;</button>
                        </div>

                        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                            <label className="block text-xs font-bold text-amber-700 mb-2 uppercase">Select Trend to Edit</label>
                            <select
                                className="w-full p-2 border rounded-lg"
                                onChange={(e) => {
                                    const trend = allMarketTrends.find(t => t.id === e.target.value);
                                    if (trend) setEditingTrend({ ...trend });
                                }}
                            >
                                <option value="">-- Search Library --</option>
                                {allMarketTrends.map(t => <option key={t.id} value={t.id}>{t.title}</option>)}
                            </select>
                        </div>

                        {editingTrend && (
                            <div className="space-y-4 pt-4 border-t animate-in fade-in slide-in-from-top-2">
                                <input className="w-full p-3 border rounded-xl" value={editingTrend.title} onChange={e => setEditingTrend({ ...editingTrend, title: e.target.value })} />
                                <textarea className="w-full p-3 border rounded-xl" rows={3} value={editingTrend.content} onChange={e => setEditingTrend({ ...editingTrend, content: e.target.value })} />
                                <input className="w-full p-3 border rounded-xl" value={editingTrend.itemUrl} onChange={e => setEditingTrend({ ...editingTrend, itemUrl: e.target.value })} />
                                <label className="text-xs font-bold text-gray-400">Update Image (Optional)</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="w-full p-2 border rounded-lg"
                                    onChange={(e) => setEditFile(e.target.files?.[0] || null)}
                                />

                                <button onClick={handleUpdateTrend} className="...">Update</button>
                                <select className="w-full p-3 border rounded-xl" value={editingTrend.category} onChange={e => setEditingTrend({ ...editingTrend, category: e.target.value })}>
                                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                                <button onClick={handleUpdateTrend} className="w-full py-4 bg-amber-600 text-white rounded-xl font-bold">Update Trend Details</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MarketTrendsCms;