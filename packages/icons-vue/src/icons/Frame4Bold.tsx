// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame4BoldSvg from '@ant-design/icons-svg/lib/asn/Frame4Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame4BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame4Bold: Frame4BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame4BoldSvg}></AntdIcon>;
};

Frame4Bold.displayName = 'Frame4Bold';
Frame4Bold.inheritAttrs = false;
export default Frame4Bold;