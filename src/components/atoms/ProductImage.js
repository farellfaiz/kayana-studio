import { Tabs, TabList, TabPanels, Tab, TabPanel, Center } from "@chakra-ui/react"
import { ImageTab } from './../'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

const ProductImage = ({ imgA, imgB, imgC, imgD }) => {
    return (
        <>
            <Tabs defaultIndex={1} variant="enclosed">
                <TabPanels>
                    <TabPanel>
                        <InnerImageZoom src={imgA} width="300px" />
                    </TabPanel>
                    <TabPanel>
                        <InnerImageZoom src={imgB} width="300px" />
                    </TabPanel>
                    <TabPanel>
                        <InnerImageZoom src={imgC} width="300px" />
                    </TabPanel>
                    <TabPanel>
                        <InnerImageZoom src={imgD} width="300px" />
                    </TabPanel>
                </TabPanels>
                <Center>
                <TabList>
                    <Tab><ImageTab src={imgA} /></Tab>
                    <Tab><ImageTab src={imgB} /></Tab>
                    <Tab><ImageTab src={imgC} /></Tab>
                    <Tab><ImageTab src={imgD} /></Tab>
                </TabList>
                </Center>
            </Tabs>
        </>
    )
}

export default ProductImage
