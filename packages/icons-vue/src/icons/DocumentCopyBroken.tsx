// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCopyBrokenSvg from '@ant-design/icons-svg/lib/asn/DocumentCopyBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCopyBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCopyBroken: DocumentCopyBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCopyBrokenSvg}></AntdIcon>;
};

DocumentCopyBroken.displayName = 'DocumentCopyBroken';
DocumentCopyBroken.inheritAttrs = false;
export default DocumentCopyBroken;