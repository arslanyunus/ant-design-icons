// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCopyTwoToneSvg from '@ant-design/icons-svg/lib/asn/DocumentCopyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCopyTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCopyTwoTone: DocumentCopyTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCopyTwoToneSvg}></AntdIcon>;
};

DocumentCopyTwoTone.displayName = 'DocumentCopyTwoTone';
DocumentCopyTwoTone.inheritAttrs = false;
export default DocumentCopyTwoTone;