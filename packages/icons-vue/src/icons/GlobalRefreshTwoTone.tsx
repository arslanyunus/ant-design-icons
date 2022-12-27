// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalRefreshTwoToneSvg from '@ant-design/icons-svg/lib/asn/GlobalRefreshTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalRefreshTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalRefreshTwoTone: GlobalRefreshTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalRefreshTwoToneSvg}></AntdIcon>;
};

GlobalRefreshTwoTone.displayName = 'GlobalRefreshTwoTone';
GlobalRefreshTwoTone.inheritAttrs = false;
export default GlobalRefreshTwoTone;