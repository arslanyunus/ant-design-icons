// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Battery3FullBoldSvg from '@ant-design/icons-svg/lib/asn/Battery3FullBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Battery3FullBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Battery3FullBold: Battery3FullBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Battery3FullBoldSvg}></AntdIcon>;
};

Battery3FullBold.displayName = 'Battery3FullBold';
Battery3FullBold.inheritAttrs = false;
export default Battery3FullBold;