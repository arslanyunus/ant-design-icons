// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentDownloadBrokenSvg from '@ant-design/icons-svg/lib/asn/DocumentDownloadBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentDownloadBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentDownloadBroken: DocumentDownloadBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentDownloadBrokenSvg}></AntdIcon>;
};

DocumentDownloadBroken.displayName = 'DocumentDownloadBroken';
DocumentDownloadBroken.inheritAttrs = false;
export default DocumentDownloadBroken;