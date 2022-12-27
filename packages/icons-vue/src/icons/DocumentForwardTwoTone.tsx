// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentForwardTwoToneSvg from '@ant-design/icons-svg/lib/asn/DocumentForwardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentForwardTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentForwardTwoTone: DocumentForwardTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentForwardTwoToneSvg}></AntdIcon>;
};

DocumentForwardTwoTone.displayName = 'DocumentForwardTwoTone';
DocumentForwardTwoTone.inheritAttrs = false;
export default DocumentForwardTwoTone;