// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting3OutlineSvg from '@ant-design/icons-svg/lib/asn/Setting3Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting3OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting3Outline: Setting3OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting3OutlineSvg}></AntdIcon>;
};

Setting3Outline.displayName = 'Setting3Outline';
Setting3Outline.inheritAttrs = false;
export default Setting3Outline;