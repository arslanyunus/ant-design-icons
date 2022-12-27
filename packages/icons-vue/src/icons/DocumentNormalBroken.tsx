// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentNormalBrokenSvg from '@ant-design/icons-svg/lib/asn/DocumentNormalBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentNormalBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentNormalBroken: DocumentNormalBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentNormalBrokenSvg}></AntdIcon>;
};

DocumentNormalBroken.displayName = 'DocumentNormalBroken';
DocumentNormalBroken.inheritAttrs = false;
export default DocumentNormalBroken;