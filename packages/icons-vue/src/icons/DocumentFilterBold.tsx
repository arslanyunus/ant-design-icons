// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentFilterBoldSvg from '@ant-design/icons-svg/lib/asn/DocumentFilterBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentFilterBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentFilterBold: DocumentFilterBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentFilterBoldSvg}></AntdIcon>;
};

DocumentFilterBold.displayName = 'DocumentFilterBold';
DocumentFilterBold.inheritAttrs = false;
export default DocumentFilterBold;