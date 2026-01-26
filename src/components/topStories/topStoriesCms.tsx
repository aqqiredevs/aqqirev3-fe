"use client"

import React, { useEffect, useState } from 'react'
import { apiInstance } from "@/utils/axiosInstance";
import { checkErrors } from '@/utils/checkError';

interface Story {
    id: string;
    title: string;
    content: string;
    storyUrl: string;
    category: string;
    slot?: number | null;
}

const TopStoriesCms = () => {
    const [allStories, setAllStories] = useState<Story[]>([]);
    const [stagedSlots, setStagedSlots] = useState<Record<number, string | null>>({ 1: null, 2: null, 3: null, 4: null, 5: null });
    const [loading, setLoading] = useState(true);

    // UI States
    const [activeSlot, setActiveSlot] = useState<number | null>(null);
    const [selectedStoryId, setSelectedStoryId] = useState<string>("");
    const [isCreating, setIsCreating] = useState(false);
    const [isManaging, setIsManaging] = useState(false);

    // Form States
    const CATEGORIES = ["News", "Lifestyle", "Property", "Finance", "Investment"];
    const [newStory, setNewStory] = useState({ title: "", content: "", storyUrl: "", category: "" });
    const [editingStory, setEditingStory] = useState<Story | null>(null);

    useEffect(() => {
        const loadInitialData = async () => {
            try {
                const response = await apiInstance.get("/api/cms/top-stories/all");
                const data = response.data;
                setAllStories(data);

                const mapping: Record<number, string | null> = { 1: null, 2: null, 3: null, 4: null, 5: null };
                data.forEach((s: Story) => {
                    if (s.slot) mapping[s.slot] = s.id;
                });
                setStagedSlots(mapping);
            } catch (err) {
                checkErrors(err);
            } finally {
                setLoading(false);
            }
        }
        loadInitialData();
    }, []);

    const handleConfirmAssign = async () => {
        if (!activeSlot || !selectedStoryId) return;
        try {
            await apiInstance.patch("/api/cms/top-stories/publish", { story_id: selectedStoryId, slot: activeSlot });
            setStagedSlots(prev => ({ ...prev, [activeSlot]: selectedStoryId }));
            setAllStories(prev => prev.map(s => s.id === selectedStoryId ? { ...s, slot: activeSlot } : s));
            setActiveSlot(null);
            setSelectedStoryId("");
        } catch (err) { checkErrors(err); }
    };

    const handleCreateNewStory = async () => {
        if (!newStory.title || !newStory.content || !newStory.storyUrl || !newStory.category) return;
        try {
            const response = await apiInstance.post("/api/cms/top-stories", newStory);
            setAllStories(prev => [response.data, ...prev]);
            setIsCreating(false);
            setNewStory({ title: "", content: "", storyUrl: "", category: "" });
            alert("Story created!");
        } catch (err) { checkErrors(err); }
    }

    const handleUpdateStory = async () => {
        if (!editingStory) return;
        try {
            // Assuming your backend has a PUT endpoint: /api/cms/top-stories/{id}
            await apiInstance.put(`/api/cms/top-stories/${editingStory.id}`, editingStory);
            setAllStories(prev => prev.map(s => s.id === editingStory.id ? editingStory : s));
            setIsManaging(false);
            setEditingStory(null);
            alert("Story updated!");
        } catch (err) { checkErrors(err); }
    }

    if (loading) return <div className="p-10 text-center">Loading...</div>;

    return (
        <div className='p-10 max-w-7xl mx-auto'>
            <h1 className="text-2xl font-bold mb-6">Homepage Top Stories</h1>

            <div className='flex gap-4 mb-10'>
                {/* 5 SLOTS GRID */}
                <div className="flex-[3] flex gap-4">
                    {[1, 2, 3, 4, 5].map((num) => {
                        const story = allStories.find(s => s.id === stagedSlots[num]);
                        return (
                            <div key={num} onClick={() => setActiveSlot(num)} className={`flex-1 min-h-[120px] p-4 border-2 rounded-xl cursor-pointer transition-all hover:bg-white flex flex-col justify-center items-center text-center ${story ? 'border-blue-500 bg-blue-50' : 'border-dashed border-gray-300 bg-gray-50'}`}>
                                <span className="text-[10px] font-bold text-gray-400 uppercase mb-1">Slot {num}</span>
                                <p className="text-xs font-semibold text-blue-900 line-clamp-2">{story ? story.title : "+ Assign"}</p>
                            </div>
                        );
                    })}
                </div>

                {/* CONTROL BUTTONS */}
                <div className="flex-1 flex flex-col gap-2">
                    <button onClick={() => setIsCreating(true)} className="flex-1 border-2 border-indigo-200 bg-indigo-50 rounded-xl font-bold text-indigo-600 hover:bg-indigo-100 transition-colors border-dashed">
                        📝 Create Story
                    </button>
                    <button onClick={() => setIsManaging(true)} className="flex-1 border-2 border-amber-200 bg-amber-50 rounded-xl font-bold text-amber-600 hover:bg-amber-100 transition-colors border-dashed">
                        ⚙️ Manage Stories
                    </button>
                </div>
            </div>

            {/* ASSIGN MODAL (Existing logic) */}
            {activeSlot && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
                        <h2 className="text-lg font-bold mb-4">Assign to Slot {activeSlot}</h2>
                        <select className="w-full p-3 border rounded-xl mb-4" value={selectedStoryId} onChange={(e) => setSelectedStoryId(e.target.value)}>
                            <option value="">Choose a story...</option>
                            {allStories.filter(s => s.slot === null).map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                        </select>
                        <div className="flex gap-2">
                            <button onClick={() => setActiveSlot(null)} className="flex-1 py-3 bg-gray-100 rounded-xl">Cancel</button>
                            <button onClick={handleConfirmAssign} className="flex-2 py-3 bg-blue-600 text-white rounded-xl font-bold">Confirm</button>
                        </div>
                    </div>
                </div>
            )}

            {/* CREATE MODAL (Existing logic) */}
            {isCreating && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 space-y-4">
                        <h2 className="text-lg font-bold">Create New Story</h2>
                        <input className="w-full p-3 border rounded-xl" placeholder="Title" value={newStory.title} onChange={e => setNewStory({ ...newStory, title: e.target.value })} />
                        <textarea className="w-full p-3 border rounded-xl" placeholder="Content" value={newStory.content} onChange={e => setNewStory({ ...newStory, content: e.target.value })} />
                        <input className="w-full p-3 border rounded-xl" placeholder="URL" value={newStory.storyUrl} onChange={e => setNewStory({ ...newStory, storyUrl: e.target.value })} />
                        <select className="w-full p-3 border rounded-xl" value={newStory.category} onChange={e => setNewStory({ ...newStory, category: e.target.value })}>
                            <option value="">Select Category</option>
                            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        <button onClick={handleCreateNewStory} className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold">Save to Library</button>
                    </div>
                </div>
            )}

            {/* MANAGE MODAL (New logic) */}
            {isManaging && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 space-y-4 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-bold">Manage & Edit Stories</h2>
                            <button onClick={() => { setIsManaging(false); setEditingStory(null); }} className="text-2xl">&times;</button>
                        </div>

                        {/* STEP 1: SELECT STORY TO EDIT */}
                        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                            <label className="block text-xs font-bold text-amber-700 mb-2 uppercase">Select Story to Modify</label>
                            <select
                                className="w-full p-2 border rounded-lg"
                                onChange={(e) => {
                                    const story = allStories.find(s => s.id === e.target.value);
                                    if (story) setEditingStory({ ...story });
                                }}
                            >
                                <option value="">-- Search Story --</option>
                                {allStories.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                            </select>
                        </div>

                        {/* STEP 2: EDIT FORM (Only shows if a story is selected) */}
                        {editingStory && (
                            <div className="space-y-4 pt-4 border-t animate-in fade-in slide-in-from-top-2">
                                <input className="w-full p-3 border rounded-xl" value={editingStory.title} onChange={e => setEditingStory({ ...editingStory, title: e.target.value })} />
                                <textarea className="w-full p-3 border rounded-xl" rows={3} value={editingStory.content} onChange={e => setEditingStory({ ...editingStory, content: e.target.value })} />
                                <input className="w-full p-3 border rounded-xl" value={editingStory.storyUrl} onChange={e => setEditingStory({ ...editingStory, storyUrl: e.target.value })} />
                                <select className="w-full p-3 border rounded-xl" value={editingStory.category} onChange={e => setEditingStory({ ...editingStory, category: e.target.value })}>
                                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                                <button onClick={handleUpdateStory} className="w-full py-4 bg-amber-600 text-white rounded-xl font-bold">Update Story Details</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TopStoriesCms;