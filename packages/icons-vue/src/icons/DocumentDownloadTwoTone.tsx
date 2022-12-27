// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentDownloadTwoToneSvg from '@ant-design/icons-svg/lib/asn/DocumentDownloadTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentDownloadTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentDownloadTwoTone: DocumentDownloadTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentDownloadTwoToneSvg}></AntdIcon>;
};

DocumentDownloadTwoTone.displayName = 'DocumentDownloadTwoTone';
DocumentDownloadTwoTone.inheritAttrs = false;
export default DocumentDownloadTwoTone;