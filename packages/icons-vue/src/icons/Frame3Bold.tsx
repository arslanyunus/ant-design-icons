// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame3BoldSvg from '@ant-design/icons-svg/lib/asn/Frame3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame3Bold: Frame3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame3BoldSvg}></AntdIcon>;
};

Frame3Bold.displayName = 'Frame3Bold';
Frame3Bold.inheritAttrs = false;
export default Frame3Bold;