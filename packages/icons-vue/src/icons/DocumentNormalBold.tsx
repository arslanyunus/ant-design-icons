// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentNormalBoldSvg from '@ant-design/icons-svg/lib/asn/DocumentNormalBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentNormalBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentNormalBold: DocumentNormalBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentNormalBoldSvg}></AntdIcon>;
};

DocumentNormalBold.displayName = 'DocumentNormalBold';
DocumentNormalBold.inheritAttrs = false;
export default DocumentNormalBold;