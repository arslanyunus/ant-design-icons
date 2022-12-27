// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Battery3FullOutlineSvg from '@ant-design/icons-svg/lib/asn/Battery3FullOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Battery3FullOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Battery3FullOutline: Battery3FullOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Battery3FullOutlineSvg}></AntdIcon>;
};

Battery3FullOutline.displayName = 'Battery3FullOutline';
Battery3FullOutline.inheritAttrs = false;
export default Battery3FullOutline;