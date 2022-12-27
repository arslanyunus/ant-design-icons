// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TriangleBulkSvg from '@ant-design/icons-svg/lib/asn/TriangleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TriangleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TriangleBulk: TriangleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TriangleBulkSvg}></AntdIcon>;
};

TriangleBulk.displayName = 'TriangleBulk';
TriangleBulk.inheritAttrs = false;
export default TriangleBulk;