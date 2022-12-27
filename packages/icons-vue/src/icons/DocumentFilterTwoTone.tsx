// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentFilterTwoToneSvg from '@ant-design/icons-svg/lib/asn/DocumentFilterTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentFilterTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentFilterTwoTone: DocumentFilterTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentFilterTwoToneSvg}></AntdIcon>;
};

DocumentFilterTwoTone.displayName = 'DocumentFilterTwoTone';
DocumentFilterTwoTone.inheritAttrs = false;
export default DocumentFilterTwoTone;