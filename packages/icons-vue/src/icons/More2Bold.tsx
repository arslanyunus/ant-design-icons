// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import More2BoldSvg from '@ant-design/icons-svg/lib/asn/More2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface More2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const More2Bold: More2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={More2BoldSvg}></AntdIcon>;
};

More2Bold.displayName = 'More2Bold';
More2Bold.inheritAttrs = false;
export default More2Bold;