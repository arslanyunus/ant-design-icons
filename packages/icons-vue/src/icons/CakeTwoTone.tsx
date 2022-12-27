// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CakeTwoToneSvg from '@ant-design/icons-svg/lib/asn/CakeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CakeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CakeTwoTone: CakeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CakeTwoToneSvg}></AntdIcon>;
};

CakeTwoTone.displayName = 'CakeTwoTone';
CakeTwoTone.inheritAttrs = false;
export default CakeTwoTone;