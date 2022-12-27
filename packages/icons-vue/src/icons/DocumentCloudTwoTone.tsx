// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCloudTwoToneSvg from '@ant-design/icons-svg/lib/asn/DocumentCloudTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCloudTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCloudTwoTone: DocumentCloudTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCloudTwoToneSvg}></AntdIcon>;
};

DocumentCloudTwoTone.displayName = 'DocumentCloudTwoTone';
DocumentCloudTwoTone.inheritAttrs = false;
export default DocumentCloudTwoTone;