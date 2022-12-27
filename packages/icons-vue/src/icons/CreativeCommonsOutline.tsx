// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CreativeCommonsOutlineSvg from '@ant-design/icons-svg/lib/asn/CreativeCommonsOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CreativeCommonsOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CreativeCommonsOutline: CreativeCommonsOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CreativeCommonsOutlineSvg}></AntdIcon>;
};

CreativeCommonsOutline.displayName = 'CreativeCommonsOutline';
CreativeCommonsOutline.inheritAttrs = false;
export default CreativeCommonsOutline;