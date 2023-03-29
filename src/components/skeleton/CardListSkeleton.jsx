import { Skeleton, Box } from "@mui/material"

export default function CardListSkeleton() {
  return (
    
            <Box mt={5}>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton sx={{height: "150px", my: 2}} variant="rectangular" />
              <Skeleton />
              <Skeleton />
            </Box>
          
  )
}
