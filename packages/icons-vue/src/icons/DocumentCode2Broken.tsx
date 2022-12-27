// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCode2BrokenSvg from '@ant-design/icons-svg/lib/asn/DocumentCode2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCode2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCode2Broken: DocumentCode2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCode2BrokenSvg}></AntdIcon>;
};

DocumentCode2Broken.displayName = 'DocumentCode2Broken';
DocumentCode2Broken.inheritAttrs = false;
export default DocumentCode2Broken;