// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectLeftBrokenSvg from '@ant-design/icons-svg/lib/asn/DirectLeftBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectLeftBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectLeftBroken: DirectLeftBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectLeftBrokenSvg}></AntdIcon>;
};

DirectLeftBroken.displayName = 'DirectLeftBroken';
DirectLeftBroken.inheritAttrs = false;
export default DirectLeftBroken;