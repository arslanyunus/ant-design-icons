// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectLeftBoldSvg from '@ant-design/icons-svg/lib/asn/DirectLeftBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectLeftBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectLeftBold: DirectLeftBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectLeftBoldSvg}></AntdIcon>;
};

DirectLeftBold.displayName = 'DirectLeftBold';
DirectLeftBold.inheritAttrs = false;
export default DirectLeftBold;