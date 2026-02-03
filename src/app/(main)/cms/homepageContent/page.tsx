"use client"


import React, { useEffect, useState } from 'react'
import { apiInstance } from "@/utils/axiosInstance";
import { checkErrors } from '@/utils/checkError';
import TopStoriesCms from '@/components/topStories/topStoriesCms';
import MarketTrendsCms from '@/components/marketTrends/marketTrendsCms';


interface Story {
  id: string
  title: string
  content: string
  slot?: number | null
}

const HomepageContent = () => {





  return (
    <div>
      <div><TopStoriesCms /></div>
      <div><MarketTrendsCms /></div>
    </div>

  )
}

export default HomepageContent