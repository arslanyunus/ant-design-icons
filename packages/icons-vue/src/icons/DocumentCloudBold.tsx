// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCloudBoldSvg from '@ant-design/icons-svg/lib/asn/DocumentCloudBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCloudBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCloudBold: DocumentCloudBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCloudBoldSvg}></AntdIcon>;
};

DocumentCloudBold.displayName = 'DocumentCloudBold';
DocumentCloudBold.inheritAttrs = false;
export default DocumentCloudBold;