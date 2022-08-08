import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiCodeAlt } from "react-icons/bi";
import { BsFillImageFill } from "react-icons/bs";
import { FaUpload } from "react-icons/fa";
import { MdSubtitles } from "react-icons/md";
import CodeEditor from "./CodeEditor";

const NewPostByTabs = () => {
  const handleChange = (e: any) => {
    console.log(e);
  };

  return (
    <Tabs>
      <TabList>
        <Tab as="div">
          <Button leftIcon={<MdSubtitles />}>Desc</Button>
        </Tab>
        <Tab as="div">
          <Button leftIcon={<BiCodeAlt />}>Code</Button>
        </Tab>
        <Tab as="div">
          <Button leftIcon={<BsFillImageFill />}>Image</Button>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input />
            <FormHelperText>
              Title will be highlighted in the post.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea />
            <FormHelperText>Small description about the post.</FormHelperText>
          </FormControl>
        </TabPanel>
        <TabPanel>
          <CodeEditor onCodeChange={handleChange} />
        </TabPanel>
        <TabPanel>
          <Box
            border="3px dashed"
            borderColor={useColorModeValue("gray.300", "gray.800")}
            height={300}
            borderRadius="md"
          >
            <Box
              width="100%"
              height="100%"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                width="100%"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <FormLabel htmlFor="targetFile">
                  {/* Upload */}
                  <Button as="span" leftIcon={<FaUpload />} cursor="pointer">
                    Upload the Image
                  </Button>
                </FormLabel>
                <Box display="none">
                  <Input type="file" id="targetFile" />
                </Box>
              </Box>
            </Box>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default NewPostByTabs;
