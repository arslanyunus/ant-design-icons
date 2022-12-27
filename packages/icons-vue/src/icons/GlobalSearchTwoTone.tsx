// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalSearchTwoToneSvg from '@ant-design/icons-svg/lib/asn/GlobalSearchTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalSearchTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalSearchTwoTone: GlobalSearchTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalSearchTwoToneSvg}></AntdIcon>;
};

GlobalSearchTwoTone.displayName = 'GlobalSearchTwoTone';
GlobalSearchTwoTone.inheritAttrs = false;
export default GlobalSearchTwoTone;