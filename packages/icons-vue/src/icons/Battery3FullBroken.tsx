// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Battery3FullBrokenSvg from '@ant-design/icons-svg/lib/asn/Battery3FullBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Battery3FullBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Battery3FullBroken: Battery3FullBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Battery3FullBrokenSvg}></AntdIcon>;
};

Battery3FullBroken.displayName = 'Battery3FullBroken';
Battery3FullBroken.inheritAttrs = false;
export default Battery3FullBroken;