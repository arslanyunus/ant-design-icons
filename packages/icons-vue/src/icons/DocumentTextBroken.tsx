// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentTextBrokenSvg from '@ant-design/icons-svg/lib/asn/DocumentTextBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentTextBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentTextBroken: DocumentTextBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentTextBrokenSvg}></AntdIcon>;
};

DocumentTextBroken.displayName = 'DocumentTextBroken';
DocumentTextBroken.inheritAttrs = false;
export default DocumentTextBroken;