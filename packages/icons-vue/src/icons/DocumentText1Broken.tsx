// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentText1BrokenSvg from '@ant-design/icons-svg/lib/asn/DocumentText1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentText1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentText1Broken: DocumentText1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentText1BrokenSvg}></AntdIcon>;
};

DocumentText1Broken.displayName = 'DocumentText1Broken';
DocumentText1Broken.inheritAttrs = false;
export default DocumentText1Broken;