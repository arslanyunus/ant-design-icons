// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentFilterBrokenSvg from '@ant-design/icons-svg/lib/asn/DocumentFilterBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentFilterBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentFilterBroken: DocumentFilterBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentFilterBrokenSvg}></AntdIcon>;
};

DocumentFilterBroken.displayName = 'DocumentFilterBroken';
DocumentFilterBroken.inheritAttrs = false;
export default DocumentFilterBroken;