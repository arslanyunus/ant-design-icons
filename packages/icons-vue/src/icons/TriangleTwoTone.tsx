// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TriangleTwoToneSvg from '@ant-design/icons-svg/lib/asn/TriangleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TriangleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TriangleTwoTone: TriangleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TriangleTwoToneSvg}></AntdIcon>;
};

TriangleTwoTone.displayName = 'TriangleTwoTone';
TriangleTwoTone.inheritAttrs = false;
export default TriangleTwoTone;