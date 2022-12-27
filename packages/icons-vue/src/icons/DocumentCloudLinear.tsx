// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCloudLinearSvg from '@ant-design/icons-svg/lib/asn/DocumentCloudLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCloudLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCloudLinear: DocumentCloudLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCloudLinearSvg}></AntdIcon>;
};

DocumentCloudLinear.displayName = 'DocumentCloudLinear';
DocumentCloudLinear.inheritAttrs = false;
export default DocumentCloudLinear;