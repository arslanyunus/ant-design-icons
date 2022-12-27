// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame1BoldSvg from '@ant-design/icons-svg/lib/asn/Frame1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame1Bold: Frame1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame1BoldSvg}></AntdIcon>;
};

Frame1Bold.displayName = 'Frame1Bold';
Frame1Bold.inheritAttrs = false;
export default Frame1Bold;