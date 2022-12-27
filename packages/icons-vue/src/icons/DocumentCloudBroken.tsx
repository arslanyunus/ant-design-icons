// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCloudBrokenSvg from '@ant-design/icons-svg/lib/asn/DocumentCloudBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCloudBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCloudBroken: DocumentCloudBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCloudBrokenSvg}></AntdIcon>;
};

DocumentCloudBroken.displayName = 'DocumentCloudBroken';
DocumentCloudBroken.inheritAttrs = false;
export default DocumentCloudBroken;