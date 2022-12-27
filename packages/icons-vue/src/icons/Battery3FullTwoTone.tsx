// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Battery3FullTwoToneSvg from '@ant-design/icons-svg/lib/asn/Battery3FullTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Battery3FullTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Battery3FullTwoTone: Battery3FullTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Battery3FullTwoToneSvg}></AntdIcon>;
};

Battery3FullTwoTone.displayName = 'Battery3FullTwoTone';
Battery3FullTwoTone.inheritAttrs = false;
export default Battery3FullTwoTone;