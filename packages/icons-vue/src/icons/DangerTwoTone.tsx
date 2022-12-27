// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DangerTwoToneSvg from '@ant-design/icons-svg/lib/asn/DangerTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DangerTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DangerTwoTone: DangerTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DangerTwoToneSvg}></AntdIcon>;
};

DangerTwoTone.displayName = 'DangerTwoTone';
DangerTwoTone.inheritAttrs = false;
export default DangerTwoTone;