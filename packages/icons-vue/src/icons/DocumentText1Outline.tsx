// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentText1OutlineSvg from '@ant-design/icons-svg/lib/asn/DocumentText1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentText1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentText1Outline: DocumentText1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentText1OutlineSvg}></AntdIcon>;
};

DocumentText1Outline.displayName = 'DocumentText1Outline';
DocumentText1Outline.inheritAttrs = false;
export default DocumentText1Outline;