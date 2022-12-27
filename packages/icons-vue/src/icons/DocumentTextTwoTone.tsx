// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentTextTwoToneSvg from '@ant-design/icons-svg/lib/asn/DocumentTextTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentTextTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentTextTwoTone: DocumentTextTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentTextTwoToneSvg}></AntdIcon>;
};

DocumentTextTwoTone.displayName = 'DocumentTextTwoTone';
DocumentTextTwoTone.inheritAttrs = false;
export default DocumentTextTwoTone;