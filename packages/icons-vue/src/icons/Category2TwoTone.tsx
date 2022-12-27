// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Category2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Category2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Category2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Category2TwoTone: Category2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Category2TwoToneSvg}></AntdIcon>;
};

Category2TwoTone.displayName = 'Category2TwoTone';
Category2TwoTone.inheritAttrs = false;
export default Category2TwoTone;