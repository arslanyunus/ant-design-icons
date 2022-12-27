// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentBrokenSvg from '@ant-design/icons-svg/lib/asn/DocumentBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentBroken: DocumentBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentBrokenSvg}></AntdIcon>;
};

DocumentBroken.displayName = 'DocumentBroken';
DocumentBroken.inheritAttrs = false;
export default DocumentBroken;