// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TriangleBoldSvg from '@ant-design/icons-svg/lib/asn/TriangleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TriangleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TriangleBold: TriangleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TriangleBoldSvg}></AntdIcon>;
};

TriangleBold.displayName = 'TriangleBold';
TriangleBold.inheritAttrs = false;
export default TriangleBold;