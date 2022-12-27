// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectUpBrokenSvg from '@ant-design/icons-svg/lib/asn/DirectUpBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectUpBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectUpBroken: DirectUpBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectUpBrokenSvg}></AntdIcon>;
};

DirectUpBroken.displayName = 'DirectUpBroken';
DirectUpBroken.inheritAttrs = false;
export default DirectUpBroken;