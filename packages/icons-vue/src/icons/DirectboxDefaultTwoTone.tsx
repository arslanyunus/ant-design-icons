// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxDefaultTwoToneSvg from '@ant-design/icons-svg/lib/asn/DirectboxDefaultTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxDefaultTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxDefaultTwoTone: DirectboxDefaultTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxDefaultTwoToneSvg}></AntdIcon>;
};

DirectboxDefaultTwoTone.displayName = 'DirectboxDefaultTwoTone';
DirectboxDefaultTwoTone.inheritAttrs = false;
export default DirectboxDefaultTwoTone;