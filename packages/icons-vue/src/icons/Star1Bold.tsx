// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Star1BoldSvg from '@ant-design/icons-svg/lib/asn/Star1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Star1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Star1Bold: Star1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Star1BoldSvg}></AntdIcon>;
};

Star1Bold.displayName = 'Star1Bold';
Star1Bold.inheritAttrs = false;
export default Star1Bold;