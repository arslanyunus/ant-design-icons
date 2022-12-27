// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudFogTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudFogTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudFogTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudFogTwoTone: CloudFogTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudFogTwoToneSvg}></AntdIcon>;
};

CloudFogTwoTone.displayName = 'CloudFogTwoTone';
CloudFogTwoTone.inheritAttrs = false;
export default CloudFogTwoTone;