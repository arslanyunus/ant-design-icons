// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentDownloadLinearSvg from '@ant-design/icons-svg/lib/asn/DocumentDownloadLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentDownloadLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentDownloadLinear: DocumentDownloadLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentDownloadLinearSvg}></AntdIcon>;
};

DocumentDownloadLinear.displayName = 'DocumentDownloadLinear';
DocumentDownloadLinear.inheritAttrs = false;
export default DocumentDownloadLinear;