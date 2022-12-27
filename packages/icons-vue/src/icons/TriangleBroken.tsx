// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TriangleBrokenSvg from '@ant-design/icons-svg/lib/asn/TriangleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TriangleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TriangleBroken: TriangleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TriangleBrokenSvg}></AntdIcon>;
};

TriangleBroken.displayName = 'TriangleBroken';
TriangleBroken.inheritAttrs = false;
export default TriangleBroken;