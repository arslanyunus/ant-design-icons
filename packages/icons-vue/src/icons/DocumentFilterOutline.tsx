// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentFilterOutlineSvg from '@ant-design/icons-svg/lib/asn/DocumentFilterOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentFilterOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentFilterOutline: DocumentFilterOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentFilterOutlineSvg}></AntdIcon>;
};

DocumentFilterOutline.displayName = 'DocumentFilterOutline';
DocumentFilterOutline.inheritAttrs = false;
export default DocumentFilterOutline;