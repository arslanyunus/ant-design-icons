// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DropTwoToneSvg from '@ant-design/icons-svg/lib/asn/DropTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DropTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DropTwoTone: DropTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DropTwoToneSvg}></AntdIcon>;
};

DropTwoTone.displayName = 'DropTwoTone';
DropTwoTone.inheritAttrs = false;
export default DropTwoTone;