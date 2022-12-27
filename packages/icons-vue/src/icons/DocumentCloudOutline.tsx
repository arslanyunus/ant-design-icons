// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCloudOutlineSvg from '@ant-design/icons-svg/lib/asn/DocumentCloudOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCloudOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCloudOutline: DocumentCloudOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCloudOutlineSvg}></AntdIcon>;
};

DocumentCloudOutline.displayName = 'DocumentCloudOutline';
DocumentCloudOutline.inheritAttrs = false;
export default DocumentCloudOutline;